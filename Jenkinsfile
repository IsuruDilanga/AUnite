pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Add testing commands here
            }
        }
        stage('Deploy') {
            steps {
                // Add deployment commands here
            }
        }
    }
}


