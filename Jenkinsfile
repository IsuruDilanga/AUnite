pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM',
                  branches: [[name: '*/main']],
                  userRemoteConfigs: [[url: 'https://github.com/IsuruDilanga/AUnite.git']]])
      }
    }
    stage('Build') {
      steps {
        sh 'pip install -r requirements.txt'
      }
    }
    stage('Test') {
      steps {
        sh 'python3 -m unittest discover'
      }
    }
    stage('Deploy') {
      steps {
        sh 'python3 app.py'
      }
    }
  }
}
