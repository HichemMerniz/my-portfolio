pipeline {
    agent {
            label 'jenkins-agent'  // Specifies the agent label
        }

    environment {
        DOCKER_IMAGE = "my-portfolio:${BUILD_NUMBER}"
        CONTAINER_NAME = "my-portfolio-container"
        CONTAINER_PORT = "8080"
        HOST_PORT = "80"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the code from Git repository
                git branch: 'main', url: 'https://github.com/HichemMerniz/my-portfolio.git'
            }
        }


        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }


        stage('Deploy Container') {
            steps {
                script {
                    // Stop and remove existing container if it exists
                    sh """
                        if docker ps -a | grep -q ${CONTAINER_NAME}; then
                            docker stop ${CONTAINER_NAME} || true
                            docker rm ${CONTAINER_NAME} || true
                        fi
                    """

                    // Run new container
                    sh """
                        docker run -d \
                            --name ${CONTAINER_NAME} \
                            -p ${HOST_PORT}:${CONTAINER_PORT} \
                            --restart unless-stopped \
                            ${DOCKER_IMAGE}
                    """
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    // Check if container is running
                    sh """
                        if ! docker ps | grep -q ${CONTAINER_NAME}; then
                            echo "Container failed to start"
                            exit 1
                        fi
                    """

                    // Wait for application to be ready
                    sh 'sleep 10'  // Adjust based on your application startup time

                    // Optional: Add health check
                    // sh 'curl -f http://localhost:${HOST_PORT}/health || exit 1'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            // Optional: Send success notification
            // slackSend channel: '#deployments', color: 'good', message: "Deployment successful: ${DOCKER_IMAGE}"
        }
        failure {
            echo 'Pipeline failed!'
            // Optional: Send failure notification
            // slackSend channel: '#deployments', color: 'danger', message: "Deployment failed: ${DOCKER_IMAGE}"
        }
    }
}