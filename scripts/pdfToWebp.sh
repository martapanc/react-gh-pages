source ~/.bash_profile

cd ~/Workspace/react-gh-pages/src/assets/images/cv || exit

convert -verbose -density 600 ./*.pdf -quality 100 cv.webp


### USAGE ###
# Edit CV on Word and save it as PDF (name can have spaces or dashes)
# Put PDF in the src/assets/images/cv folder
# Run the script from the main directory
