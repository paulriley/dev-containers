const core = require('@actions/core');
const Docker = require('dockerode');

try {
  const docker = new Docker({socketPath: '/var/run/docker.sock'});
  const dockerHubUser = core.getInput('docker-hub-user');
  const image = docker.pull(`${dockerHubUser}/vscode-dotnet-essentials:3.0`, processStream);
  core.info(`Image pulled ${image.id}`);
  core.setOutput(image.id);
} catch (error) {
  core.setFailed(error.message);
}

function processStream(error, stream) {
  if (error) {
    core.error(err);
  } else {
    stream.on('data', data => core.info(data));
    stream.on('error', err => core.setFailed(err));
  }
}
