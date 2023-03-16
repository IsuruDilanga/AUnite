pipeline {
    agent any
    
    stages {
        stage('Lint') {
            steps {
                sh 'pip install flake8'
                sh 'flake8 . --count --select=E901,E999,F821,F822,F823 --show-source --statistics'
            }
        }
        
        stage('Test') {
            steps {
                sh 'pip install pytest'
                sh 'pytest'
            }
        }
        
        stage('Build') {
            steps {
                sh 'pip install -r requirements.txt'
                sh 'python run.py build'
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                sh 'ssh user@staging-server "cd /path/to/app; git pull"'
                sh 'ssh user@staging-server "cd /path/to/app; pip install -r requirements.txt"'
                sh 'ssh user@staging-server "cd /path/to/app; python run.py restart"'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'master'
            }
            steps {
                sh 'ssh user@production-server "cd /path/to/app; git pull"'
                sh 'ssh user@production-server "cd /path/to/app; pip install -r requirements.txt"'
                sh 'ssh user@production-server "cd /path/to/app; python run.py restart"'
            }
        }
    }
}


