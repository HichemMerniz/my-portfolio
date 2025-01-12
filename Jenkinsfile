pipeline {
	agent {
	docker {image 'node:18-alpine'}
	}
    environment {
		DOCKER_IMAGE = "my-app:${env.BUILD_NUMBER}"
    }
    stages {
		stage('Checkout') {
			steps {
				// Pull the code from Git repository
                git branch: 'main', url: 'https://github.com/username/my-repo.git'
            }
        }
        stage('Build') {
			steps {
				// Build the project (e.g., using Maven, Gradle, or npm)
                echo 'Building the application...'
                sh './build-script.sh' // Replace with your build command
            }
        }
//         stage('Test') {
// 			steps {
// 				// Run tests
//                 echo 'Running tests...'
//                 sh './test-script.sh' // Replace with your test command
//             }
//         }
//         stage('Docker Build & Push') {
// 			steps {
// 				script {
// 					echo 'Building Docker image...'
//                     sh "docker build -t ${DOCKER_IMAGE} ."
//                     echo 'Pushing Docker image to registry...'
//                     sh "docker push ${DOCKER_IMAGE}"
//                 }
//             }
//         }
        stage('Deploy') {
			steps {
				// Deploy the application
                echo 'Deploying the application...'
                sh './deploy-script.sh' // Replace with your deployment command
            }
        }
    }
    post {
		success {
			echo 'Build and deployment successful!'
        }
        failure {
			echo 'Build failed!'
        }
    }
}
