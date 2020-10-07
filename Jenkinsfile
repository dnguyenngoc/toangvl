pipeline {

  environment { 
    registry = "duynguyenngoc/toangvl" 
    registryCredential = 'dockerhub' 
    dockerImage = 'backend' 
  }

  agent any
  stage('Building image') {
    steps{
      script {
        docker.build registry + ":$BUILD_NUMBER"
      }
    }
  }
}