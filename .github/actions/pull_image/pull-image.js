const core = require('@actions/core');
const Docker = require('dockerode');

try {
  const docker = new Docker({socketPath: '/var/run/docker.sock'});
  const dockerHubUser = core.getInput('docker-hub-user');
  const image = docker.pull(`${dockerHubUser}/vscode-dotnet-essentials:3.0`, err, stream => {
    docker.modem.followProgress(stream, onFinished, onProgress);
   
    function onFinished(err, output) {
      core.setOutput(output);
    }

    function onProgress(event) {
      core.info(event)
    }
    });
} catch (error) {
  core.setFailed(error.message);
}