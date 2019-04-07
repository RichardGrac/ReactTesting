#!/bin/bash
echo :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
echo SCRIPT TO CREATE A REACT COMPONENT FOLDER AND FILES STRUCTURE
echo :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
echo

read -p 'Folder Name: ' folderName

if [[ -z "$folderName" ]]; then
   printf "%s\nNo input entered."
else
    mkdir "$folderName"
    cd "$folderName"
    touch index.jsx
    touch index.css
    touch index.test.jsx
    printf "%s\nStructure created."

fi
echo
read -p 'Press any key to exit...' end