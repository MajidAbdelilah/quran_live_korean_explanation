const { exec } = require('child_process');



exec('git clone --depth 1 https://github.com/yt-dlp/yt-dlp.git && cd yt-dlp && ./yt-dlp.sh https://www.youtube.com/watch?v=8NBSwDEf8a8 && cp "Federal Reserve and the IRS American Dream (Animation) [8NBSwDEf8a8].webm" ../', (err, stdout, stderr) => {
	console.log("err = "+err);
    // node couldn't execute the command


  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);

exec('ffmpeg  -re   -i "Federal Reserve and the IRS American Dream (Animation) [8NBSwDEf8a8].webm" -acodec aac -vcodec libx264  -f flv rtmp://a.rtmp.youtube.com/live2/j820-uv4q-gss7-v067-a12d', (err, stdout, stderr) => {
	console.log("err = "+err);
    // node couldn't execute the command
//    return;

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
});

