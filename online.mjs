import * as dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()

const VOIP = process.env.VOIP || 0
const TOKEN = process.env.TOKEN
const API_VERSION = process.env.API_VERSION || 5.131
const DELAY = Number(process.env.DELAY) || 180000

console.log('---------- Eternal Online for VK ----------')

async function setOnline() {
  const params = new URLSearchParams()

  params.append('voip', VOIP)
  params.append('access_token', TOKEN)
  params.append('v', API_VERSION)

  const response = await fetch('https://api.vk.com/method/account.setOnline', {method: 'POST', body: params})

  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`)
  }

  const data = await response.json()

  if (!data.response) {
    throw new Error(data.error.error_msg)
  }

  const date = new Date()
  const hours = (date.getHours() < 10 ? '0' : '') + date.getHours()
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()

  console.log(`[${hours}:${minutes}:${seconds}]: Online is set.`)

  const ms = DELAY + Math.floor(Math.random() * 60001)

  setTimeout(setOnline, ms)
}

setOnline()
