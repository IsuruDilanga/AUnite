pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM',
                  branches: [[name: '*/CICD-Test']],
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
        sh 'python -m unittest discover'
      }
    }
    stage('Deploy') {
      steps {
        sh 'python app.py'
      }
    }
    post {
        always {
            archiveArtifacts artifacts: 'requirements.txt'
        }
    }
  }
}





