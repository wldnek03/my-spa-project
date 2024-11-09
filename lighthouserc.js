module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npx serve -s build', // 서버 명령어 설정
        url: ['http://localhost:3000'], // 테스트할 URL 설정 (포트 번호 확인)
        numberOfRuns: 3,
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };