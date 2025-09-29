pipeline {
  agent any
  stages {
    stage('Install & Lint') {
      steps {
        dir('frontend'){ sh 'npm ci && npm run lint' }
        dir('backend'){ sh 'npm ci && npm run lint' }
      }
    }
    stage('Unit & Integration Tests') {
      steps {
        dir('frontend'){ sh 'npm test -- --coverage' }
        dir('backend'){ sh 'npm test -- --coverage && npm run test:int' }
      }
    }
    stage('Quality & Security') {
      steps {
        sh 'npm i -D sonarqube-scanner'
        sh 'npx sonar-scanner'
        echo 'Para análisis de seguridad con ZAP, usar GUI o configurar ZAP en modo headless'
        echo 'Para tests de performance con JMeter, usar GUI o configurar JMeter en modo headless'
      }
    }
  }
}
