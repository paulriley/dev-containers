FROM buildpack-deps:focal-curl AS basics

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        # zsh/docker/git requirements
        apt-transport-https \
        apt-utils \
        unzip \
        2>&1 \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* 