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
        sh 'python -m pip install --upgrade pip'
        sh 'python -m pip install -r requirements.txt'
      }
    }
    stage('Test') {
      steps {
        sh 'python -m unittest discover'
      }
    }
    stage('Deploy') {
      steps {
        bat 'start /b python app.py'
      }
    }
  }
}


