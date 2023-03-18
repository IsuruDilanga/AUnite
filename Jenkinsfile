pipeline {
  agent any
  environment {
    PYTHON_VERSION = '3.11.1'
  }
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
        sh "pyenv global $PYTHON_VERSION"
        sh 'python -m pip install --upgrade pip'
        sh 'python -m pip install -r requirements.txt'
      }
    }
    stage('Test') {
      steps {
        sh "pyenv global $PYTHON_VERSION"
        sh 'python -m unittest discover'
      }
    }
    stage('Deploy') {
      steps {
        sh "pyenv global $PYTHON_VERSION"
        bat 'nohup python app.py > log.txt 2>&1 &'
      }
    }
  }
}




