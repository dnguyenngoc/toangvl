pipeline {
  environment { 
    registry = "duynguyenngoc/toangvl" 
    registryCredential = 'dockerhub' 
    dockerImage = 'backend' 
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}