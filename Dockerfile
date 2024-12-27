# Use Alpine as the base image
FROM alpine:3.21.0

# Set environment variables for MongoDB
ENV MONGO_VERSION=6.0.6
ENV MONGO_DATA_DIR=/data/db
ENV MONGO_LOG_DIR=/var/log/mongodb

# Create necessary directories
RUN mkdir -p ${MONGO_DATA_DIR} && mkdir -p ${MONGO_LOG_DIR}

# Install required packages
RUN apk add --no-cache --update \
    curl \
    tar \
    libc6-compat \
    bash \
    && echo "Packages installed successfully" \
    # Check if the MongoDB tarball is downloadable
    && curl -L https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-${MONGO_VERSION}.tgz -o /tmp/mongodb.tgz \
    && ls -lh /tmp/mongodb.tgz \
    && tar -xzvf /tmp/mongodb.tgz -C /tmp \
    && ls -lh /tmp \
    && mv /tmp/mongodb-linux-x86_64-${MONGO_VERSION} /usr/local/mongodb \
    && ln -s /usr/local/mongodb/bin/* /usr/bin/ \
    && rm -rf /tmp/* /var/cache/apk/*

# Expose MongoDB port
EXPOSE 27017

# Set MongoDB data directory as a volume
VOLUME ["${MONGO_DATA_DIR}"]

# Command to run MongoDB
CMD ["mongod", "--dbpath", "/data/db", "--bind_ip_all"]

#RUN npm run dev_client
#RUN npm run dev_server
