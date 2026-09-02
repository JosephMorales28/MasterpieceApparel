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

const sourceDirectory = path.join(
    projectRoot,
    "public",
    "js",
    "pages",
    sourceName
);

const destinationDirectory = path.join(
    projectRoot,
    "public",
    "js",
    "pages",
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
// COPY + TRANSFORM
// ------------------------------------

function cloneDirectory(source, destination) {

    fs.mkdirSync(destination, {
        recursive: true
    });

    const items = fs.readdirSync(source);

    for (const item of items) {

        const sourcePath = path.join(source, item);

        // Rename product name inside filenames
        const newItemName = item.replaceAll(
            sourceName,
            destinationName
        );

        const destinationPath = path.join(
            destination,
            newItemName
        );

        const stats = fs.statSync(sourcePath);

        if (stats.isDirectory()) {

            cloneDirectory(
                sourcePath,
                destinationPath
            );

        } else {

            let content = fs.readFileSync(
                sourcePath,
                "utf8"
            );

            // Replace product identifier
            content = content.replaceAll(
                sourceName,
                destinationName
            );

            fs.writeFileSync(
                destinationPath,
                content,
                "utf8"
            );
        }
    }
}

// ------------------------------------
// RUN
// ------------------------------------

console.log("");
console.log("Cloning product...");
console.log("");

console.log(`Source:      ${sourceName}`);
console.log(`Destination: ${destinationName}`);
console.log("");

cloneDirectory(
    sourceDirectory,
    destinationDirectory
);

console.log("✓ Product folder copied");
console.log("✓ Files copied");
console.log("✓ Folders copied");
console.log("✓ Product identifiers renamed");
console.log("");

console.log(
    `Successfully created: ${destinationName}`
);

console.log("");