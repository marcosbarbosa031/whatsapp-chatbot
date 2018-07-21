module.exports.ChatBotController = {
  init (req, res) {
    try {
      let data = req.body
      if (data.event === "INBOX") {
        // Default answer
        let answer = `This is an autoreply from APIWHA!. You (${data.from}) wrote: ${data.text}`

        return res.send({ success: true, message: answer })
      } else {
        return res.send({ success: false, error: 'Not an INBOX event.' })
      }
    } catch (error) {
      return res.send({ success: false, error: error.message })
    }
  }
}