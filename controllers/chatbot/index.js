module.exports.ChatBotController = {
  init (req, res) {
    try {
      let data = JSON.parse(req.body.data)
      console.log('req: ', req.body.data)
      if (data.event === "INBOX") {
        // Default answer
        let answer = `This is an autoreply from APIWHA!. You (${data.from}) wrote: ${data.text}`
        
        let text = data.text.toUpperCase()
        // if (text.includes("CHATBOT")) {
          if (text.includes("PRICE") || text.includes("PRICING")) {
            answer = `The prices are $9.99.`
          } else if (text.includes("INFORMATION") || text.includes("DETAIL")) {
            answer = `This is a simple WhatsApp Bot!`
          }
  
          let response = {}
          response.apiwha_autoreply = answer
          return res.send(JSON.stringify(response))
        // } else {
        //   return res.send(answer)
        // }
      } else {
        return res.send({ success: false, error: 'Not an INBOX event.' })
      }
    } catch (error) {
      return res.send({ success: false, error: error.message })
    }
  }
}