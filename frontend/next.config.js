module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/api/:path*' // Proxy to Backend
        },
        {
          source: "/uploads/:path*",
          destination: 'http://localhost:5000/uploads/:path*' // Proxy to Backend
        }
      ]
    }
  }