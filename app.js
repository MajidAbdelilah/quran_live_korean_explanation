const { exec } = require('child_process');



exec('git clone --depth 1 https://github.com/yt-dlp/yt-dlp.git && cd yt-dlp && ./yt-dlp.sh https://www.youtube.com/watch?v=8NBSwDEf8a8', (err, stdout, stderr) => {
  if (err) {
	console.log("err = "+err);
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

exec('ffmpeg', (err, stdout, stderr) => {
  if (err) {
	console.log("err = "+err);
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
