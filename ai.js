// NodeML@2023
// Credit is no need but appreciated!

const brainhandler = require("easy-json-database")
const brain = new brainhandler("./brain.json")
module.exports.getalldata = async function getalldata()
{
  return brain.all()
}
module.exports.teach = async function teach(sentance, response)
  {
    brain.set(sentance, sentance)
    if (response)
    {
      brain.set(sentance.toLowerCase() + "!response", response)
    }
  }
async function teach(sentance, response)
  {
    brain.set(sentance, sentance)
    if (response)
    {
      brain.set(sentance.toLowerCase() + "!response", response)
    }
  }
module.exports.generateresponse = async function generateresponse(sentance)
  {
    teach(sentance)
    if (brain.has(sentance.toLowerCase() + "!response"))
    {
      return brain.get(sentance.toLowerCase() + "!response")
    }
    else
    {
    var item = brain.all()[Math.floor(Math.random()*brain.all().length)].data
      teach(sentance, item)
      return brain.get(sentance.toLowerCase() + "!response")
    }
  }
