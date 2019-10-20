const core = require('@actions/core');
const Docker = require('dockerode');

try {
  const docker = new Docker({socketPath: '/var/run/docker.sock'});
  const dockerHubUser = core.getInput('docker-hub-user');
  const image = docker.pull(`${dockerHubUser}/vscode-dotnet-essentials:3.0`, (error, stream) => processStream(docker, error, stream));
  core.info(`Image pulled ${image.id}`);
  core.setOutput(image.id);
} catch (error) {
  core.setFailed(error.message);
}

function processStream(docker, error, stream) {
  if (error) {
    core.error(err);
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
