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
    stream.on(logData);
    stream.on('error', err => core.setFailed(err));
  }
}

function logData(data) {
  const progress = JSON.parse(data);
  if (progress.status === "Downloading" || progress.status === "Extracting") {
    core.debug(`${progress.status} ${progress.progress} ${progress.id}`);
  } else {
    core.info(`${progress.status} ${progress.id}`);
  }
}