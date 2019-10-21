const core = require('@actions/core');
const Docker = require('dockerode');

try {
  const dockerHubUser = core.getInput('docker-hub-user');
  const image = `${dockerHubUser}/vscode-dotnet-essentials`;
  const version = '3.0';

  pullImage(image, version)
    .then(result => core.info(result))
    .catch(result => core.error(result));
} catch (error) {
  core.setFailed(error.message);
}

function pullImage(image, version) {
  const docker = new Docker({socketPath: '/var/run/docker.sock'});
  const imageName = `${image}:${version}`;
  core.debug(`=> Pulling ${this.imageName}`);

  return new Promise((resolve, reject) => {
    docker.pull(this.imageName, (err, stream) => {
      if(err) return reject(err);
      stream.on('data', logData);
      stream.on('end', x => resolve(docker.getImage(imageName).id));
      stream.on('error', err => reject(err));
    });
  });
}

function logData(data) {
  const progress = JSON.parse(data);
  if (progress.status === "Downloading" || progress.status === "Extracting") {
    core.debug(`${progress.status} ${progress.progress} ${progress.id}`);
  } else {
    core.info(`${progress.status} ${progress.id || ''}`);
  }
}