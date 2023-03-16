pipeline {
    agent any
    stages {
        stage('git'){
            steps{
                git branch: 'main', credentialsId: 'e88e294b-a7c8-4000-8209-551493e4f964', url: 'https://github.com/IsuruDilanga/AUnite.git'   
            }
        }
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
                sh 'python Server-Components/test_app.py'
            }
        }
        stage('Deploy') {
            steps {
                sh 'python deploy.py'
            }
        }
    }
}

