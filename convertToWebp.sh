source ~/.bash_profile

for FILE in "$@"
do
  if [[ $FILE != *.webp ]]; then
    echo "coverting file: $FILE"
    EXT=${FILE##*.}
    QUALITY=30
    cwebp -q $QUALITY "$FILE" -o "${FILE/%.$EXT/.webp}" &>/dev/null
  fi
done