import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------------------
// COMMAND ARGUMENTS
// ------------------------------------

const sourceName = process.argv[2];
const destinationName = process.argv[3];

if (!sourceName || !destinationName) {
    console.error(
        "Usage: npm run clone-product <source> <destination>"
    );

    process.exit(1);
}

// ------------------------------------
// PRODUCT DIRECTORIES
// ------------------------------------

const projectRoot = path.join(__dirname, "..");

const pagesDirectory = path.join(
    projectRoot,
    "public",
    "js",
    "pages"
);

const sourceDirectory = path.join(
    pagesDirectory,
    sourceName
);

const destinationDirectory = path.join(
    pagesDirectory,
    destinationName
);

// ------------------------------------
// CHECK SOURCE
// ------------------------------------

if (!fs.existsSync(sourceDirectory)) {
    console.error(
        `Source product does not exist:\n${sourceDirectory}`
    );

    process.exit(1);
}

// ------------------------------------
// CHECK DESTINATION
// ------------------------------------

if (fs.existsSync(destinationDirectory)) {
    console.error(
        `Destination already exists:\n${destinationDirectory}`
    );

    process.exit(1);
}

// ------------------------------------
// RENAME CONTENT
// ------------------------------------

function renameContent(content) {

    // Rename the full product name first.
    content = content.replaceAll(
        sourceName,
        destinationName
    );

    // --------------------------------
    // Export functions
    // --------------------------------

    content = content.replace(
        new RegExp(
            `export\\s+function\\s+${escapeRegExp(sourceName)}\\b`,
            "g"
        ),
        `export function ${destinationName}`
    );

    // --------------------------------
    // Regular functions
    // --------------------------------

    content = content.replace(
        new RegExp(
            `function\\s+${escapeRegExp(sourceName)}\\b`,
            "g"
        ),
        `function ${destinationName}`
    );

    // --------------------------------
    // Classes
    // --------------------------------

    const sourceClassName = toPascalCase(sourceName);
    const destinationClassName = toPascalCase(destinationName);

    content = content.replaceAll(
        sourceClassName,
        destinationClassName
    );

    return content;
}

// ------------------------------------
// ESCAPE REGULAR EXPRESSIONS
// ------------------------------------

function escapeRegExp(value) {
    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}

// ------------------------------------
// PASCAL CASE
// ------------------------------------

function toPascalCase(value) {

    return value
        .split(/[-_\s]/)
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join("");
}

// ------------------------------------
// CLONE DIRECTORY
// ------------------------------------

function cloneDirectory(source, destination) {

    fs.mkdirSync(destination, {
        recursive: true
    });

    const items = fs.readdirSync(source);

    for (const item of items) {

        const sourcePath = path.join(
            source,
            item
        );

        // Rename the filename if it contains
        // the old product name.
        const newItemName = item.replaceAll(
            sourceName,
            destinationName
        );

        const destinationPath = path.join(
            destination,
            newItemName
        );

        const stats = fs.statSync(sourcePath);

        // --------------------------------
        // DIRECTORY
        // --------------------------------

        if (stats.isDirectory()) {

            cloneDirectory(
                sourcePath,
                destinationPath
            );

            continue;
        }

        // --------------------------------
        // FILE
        // --------------------------------

        const extension = path.extname(
            sourcePath
        ).toLowerCase();

        // Text/code files that we transform
        const editableFiles = [
            ".js",
            ".mjs",
            ".cjs",
            ".json",
            ".html",
            ".css",
            ".scss"
        ];

        if (editableFiles.includes(extension)) {

            let content = fs.readFileSync(
                sourcePath,
                "utf8"
            );

            content = renameContent(
                content
            );

            fs.writeFileSync(
                destinationPath,
                content,
                "utf8"
            );

        } else {

            // Images, fonts, etc.
            // are copied without modification.
            fs.copyFileSync(
                sourcePath,
                destinationPath
            );
        }
    }
}

// ------------------------------------
// RUN
// ------------------------------------

console.log("");
console.log("====================================");
console.log("       PRODUCT CLONER");
console.log("====================================");
console.log("");

console.log(`Source:      ${sourceName}`);
console.log(`Destination: ${destinationName}`);
console.log("");

cloneDirectory(
    sourceDirectory,
    destinationDirectory
);

console.log("✓ Folder created");
console.log("✓ Files copied");
console.log("✓ Filenames renamed");
console.log("✓ Product identifiers renamed");
console.log("✓ Functions renamed");
console.log("✓ Classes renamed");
console.log("");

console.log(
    `Successfully created: ${destinationName}`
);

console.log("");