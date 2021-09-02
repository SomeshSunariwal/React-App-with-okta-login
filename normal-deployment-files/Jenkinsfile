dockerImage = ''

pipeline{

    agent any


    environment {
        GO111MODULE = 'on'
        registry = "someshdokerbox/okta-frontend"
        registryCredential = 'docker-hub' // Create Jenkins Crediential ID named 'docker-hub' (or anything you want and refrenece here)
    }

    stages{
        stage("Build Docker Image") {
            steps {
                script {
                    dockerImage = docker.build registry + ":latest"
                }
            }
        }
        stage("Push Image") {
            steps {
                script {
                        docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}