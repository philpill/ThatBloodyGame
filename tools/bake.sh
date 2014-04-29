#!/bin/bash

# Path to impact.js and your game's main .js
IMPACT_LIBRARY=lib/impact/impact.js
GAME=assets/js/main.js

# Output file
OUTPUT_FILE=static/js/built.js


# Change CWD to Impact's base dir and bake!
cd ..
php tools/bake.php $IMPACT_LIBRARY $GAME $OUTPUT_FILE