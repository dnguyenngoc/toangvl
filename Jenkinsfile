pipeline {
  environment {
    registry = "duynguyenngoc/toangvl"
    registryCredential = 'dockerhub'
    backend = 'backend'
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/dnguyenngoc/toangvl'
      }
    }
    stage('Building image') {
      steps{
        dir ('/toangvl/Backend') {
          script {
            dockerImage = docker.build registry + ":" + backend
          }
        }
      }
    }
  }
}