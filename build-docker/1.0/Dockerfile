FROM buildpack-deps:bionic-curl

ENV DEBIAN_FRONTEND=noninteractive

ENV LANG en_GB.UTF-8 
ENV LANGUAGE en_GB:en
ENV LC_ALL en_GB.UTF-8

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils locales \
    && apt-get -y upgrade \
    # locales - must match ENV variables at the top of this script
    && echo "locales locales/default_environment_locale select en_GB.UTF-8" | debconf-set-selections \
    && echo "locales locales/locales_to_be_generated multiselect en_GB.UTF-8 UTF-8" | debconf-set-selections \
    && rm "/etc/locale.gen" \
    && dpkg-reconfigure locales \
    && apt-get -y install --no-install-recommends \
       apt-utils \
       lsb-release \
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

ENV DEBIAN_FRONTEND=