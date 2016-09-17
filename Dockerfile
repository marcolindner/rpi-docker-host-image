FROM resin/rpi-raspbian:jessie
ENV PATH /opt/node:$PATH
RUN apt-get upgrade; 
RUN apt-get update;
RUN apt-get install -y curl;
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs;