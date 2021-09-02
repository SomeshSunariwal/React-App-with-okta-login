dockerImage = ''

pipeline{

    agent any
    
    // Need to install Nodejs Plugin in Jenkins
    // Nodejs tool to build application 
    tools {
        nodejs "node"
    }

    environment {
        GO111MODULE = 'on'
        registry = "someshdokerbox/okta-frontend"
        registryCredential = 'docker-hub' // Create Jenkins Crediential ID named 'docker-hub' (or anything you want and refrenece here)
    }

    stages{
        stage("Install Dependencies") {
            steps {
                script {
                    sh "npm install"
                }
            }
        }
        stage("Build Application") {
            steps {
                script {
                    sh "npm run build"
                }
            }
        }
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