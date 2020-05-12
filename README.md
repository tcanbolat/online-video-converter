# online-video-converter
React built app that can convert video files to other formats. example: video.AVI to video.MOV
# app currently uploads, converts, and downloads converted video files.
# in order for this app to function, you need ffmpeg installed locally on your machine or install an ffmpeg buildpack on production server.
# when running locally make sure to set the local ffmpeg path in the controller/convert.js file.
# test a working version online here: https://reactjs-online-video-converter.herokuapp.com/
# basic funtionality in place. no loader set up, so give the app a minute or two after clicking convert. once finished; converted file will download automatically or console log an error.
# upload size limit is set to 500mb on client side.

# Todo's:
 - set up a loader while waiting for conversion.

