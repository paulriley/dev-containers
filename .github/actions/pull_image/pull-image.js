const core = require('@actions/core');
const Docker = require('dockerode');

try {
  const docker = new Docker({socketPath: '/var/run/docker.sock'});
  const dockerHubUser = core.getInput('docker-hub-user');
  docker.pull(`${dockerHubUser}/vscode-dotnet-essentials:3.0`, processStream)
    .then(image => {
      core.info(`Image pulled ${image.id}`);
      core.setOutput(image.id);
    })
    .catch(err => core.setFailed(err.message));
} catch (error) {
  core.setFailed(error.message);
}

function processStream(error, stream) {
  if (error) {
    core.info(err);
    return;
  }

  docker.modem.followProgress(stream, onFinished, onProgress);

  function onFinished(err, output) {
    if (err) {
      core.setFailed(err);
    }
    else {
      core.info(output);
    }
  }
  
  function onProgress(event) {
    core.info(event);
  }
}
