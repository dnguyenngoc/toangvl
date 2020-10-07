pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      steps {
        echo 'Build......'
        sh '''stage(\'Cloning Git\') {
  steps {
    git \'https://github.com/gustavoapolinario/microservices-node-example-todo-frontend.git\'
  }
}'''
        }
      }

    }
  }