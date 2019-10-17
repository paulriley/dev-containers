FROM buildpack-deps:buster-curl

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils \
    && apt-get -y upgrade \
    && apt-get -y install --no-install-recommends \
       apt-utils \
       lsb-release \
       # software-properties-common \
       2>&1 \
    # # Add repositories:
    #   Docker
    && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]') $(lsb_release -cs) stable" \
    # Update new repos
    && apt-get update \
    # Install Docker CLI
    && apt-get install -y docker-ce-cli \
    # Install Docker Compose CLI
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ADD .post-create.sh /root
ADD .zshrc /root

ENV DEBIAN_FRONTEND=