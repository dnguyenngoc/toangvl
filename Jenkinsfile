pipeline {
  environment {
    registry = "duynguyenngoc/toangvl"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":backend"
        }
      }
    }
  }
}