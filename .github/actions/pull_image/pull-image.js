const core = require('@actions/core');
const Docker = require('dockerode');

try {
  const dockerHubUser = core.getInput('docker-hub-user');
  const imageName = `${dockerHubUser}/vscode-dotnet-essentials`;
  const version = '3.0';

  pullImage(imageName, version)
    .then(image => core.info(image.Id))
    .catch(err => core.error(err));
} catch (error) {
  core.setFailed(error.message);
}

function pullImage(image, version) {
  const docker = new Docker({socketPath: '/var/run/docker.sock'});
  docker.modem
  const imageName = `${image}:${version}`;
  core.debug(`=> Pulling ${imageName}`);

  return new Promise((resolve, reject) => {
    docker.pull(imageName, (err, stream) => {
      if(err) return reject(err);
      stream.on('data', logData);
      stream.on('end', () => getImageInfo(docker, imageName, resolve));
      stream.on('error', err => reject(err));
    });
  });
}

function getImageInfo(docker, imageName, resolve) {
  return docker.getImage(imageName)
    .inspect((err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
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