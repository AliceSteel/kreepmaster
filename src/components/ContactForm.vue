<template>
  <form
    class="w-full relative flex flex-col items-start justify-around border-t border-white"
    @submit.prevent="checkAndSend"
    novalidate="true"
  >
    <div class="w-full border-b border-white relative h-28">
      <input
        v-model.trim="name"
        @focus="resetError('name')"
        class="w-full bg-inherit py-4 pr-[18.7%] capitilize border-none border-transparent"
        type="text"
        placeholder=" "
        name="name"
      />
      <label class="floating_label">Name</label>
      <div
        v-if="this.errors.name.length"
        class="w-full absolute left-0 top-full z-10 pl-[30%] border-t-2 border-red-500 text-red-500 text-sm text-left"
      >
        {{ errors.name }}
      </div>
    </div>

    <div class="w-full border-b border-white relative h-28">
      <input
        v-model.trim="email"
        @focus="resetError('email')"
        class="w-full bg-inherit py-4 pr-[18.7%] capitilize border-none border-transparent"
        type="email"
        placeholder=" "
        name="email"
      />
      <label class="floating_label">Email</label>
      <div
        v-if="this.errors.email"
        class="w-full absolute left-0 top-full z-10 pl-[30%] border-t-2 border-red-500 text-red-500 text-sm text-left"
      >
        {{ errors.email }}
      </div>
    </div>

    <div class="w-full border-b border-white relative h-60">
      <textarea
        v-model.trim="message"
        rows="2"
        @focus="resetError('message')"
        class="w-full bg-inherit pt-4 pb-16 pr-[18.7%] capitilize border-none border-transparent overflow-hidden resize-none"
        type="text"
        name="message"
        placeholder=" "
      ></textarea>
      <label class="floating_label">Message</label>
      <div
        v-if="this.errors.message.length"
        class="w-full absolute left-0 top-full z-10 pl-[30%] border-t-2 border-red-500 text-red-500 text-sm text-left"
      >
        {{ errors.message }}
      </div>
    </div>

    <button id="form_btn" type="submit">
      <span><sup>(4) </sup>Submit</span>
    </button>
    <div v-if="this.answer.success" class="success">{{ answer.text }}</div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      API_BOT_ID: '5430381288:AAE_eQ93YVTYwbmZ8s_uAyzqmgqXbPnE_Fk',
      CHAT_ID: '-1001772014948',
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      },
      answer: {
        success: null,
        text: ''
      }
    }
  },
  methods: {
    checkAndSend() {
      let valid = true
      if (!this.name || this.name.length <= 1) {
        this.errors.name = 'Name longer than 1 letter is required.'
        valid = false
      }
      if (!this.email) {
        this.errors.email = 'Email is required.'
        valid = false
      } else {
        if (!this.isValidEmail(this.email)) {
          this.errors.email = 'Valid email is required.'
          valid = false
        }
      }
      if (!this.message || this.message.length < 2) {
        this.errors.message = 'Message longer than 2 characters is required.'
        valid = false
      }

      if (valid) {
        const message_text =
          '<i>Message from KreepMaster</i>' +
          '%0a<b>Name: </b>' +
          this.name +
          '%0a<b>Email: </b>' +
          this.email +
          '%0a<b>Message: </b>' +
          this.message
        fetch(
          `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`
        )
          .then((resp) => {
            return resp.json()
          })
          .then((resp) => {
            if (resp.ok) {
              this.answer.success = true
              this.answer.text = 'Message successfully sent'
              this.name = this.email = this.message = ''
            } else {
              console.log(resp)
              this.answer.success = false
              this.answer.text = resp.description
            }
            setTimeout(() => {
              this.answer.success = null
              this.answer.text = ''
            }, 5000)
          })
          .catch((er) => {
            console.log(er)
            this.answer.success = false
            this.answer.text = 'AJAX error. Please try again later'
          })
      }
    },

    resetError(field) {
      this.errors[field] = ''
    },

    isValidEmail(email) {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
///label:_____________________________________________

.floating_label {
  width: 100%;
  position: absolute;
  padding: 1rem 18.7%;
  text-transform: capitalize;
  font-size: 4.5rem;
  line-height: 3rem;
  pointer-events: none;
  left: 0;
  top: 0;
  background-color: transparent;
  transition: 0.2s ease all;
}

textarea:focus,
input:focus {
  outline: none;
  ~ .floating_label {
    top: -1.5rem;
    font-size: 1.9rem;
    background-color: transparent;
  }
}

input:not(:placeholder-shown) ~ .floating_label {
  top: -1.5rem;
  font-size: 1.9rem;
  background-color: transparent;
}

#form_btn {
  width: 100%;
  background-color: transparent;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 4.5rem;
  color: #000;
  border: none;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 1rem 18.7%;
  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    border-top: 1px solid #fff;
    top: -7.7rem;
    left: 0;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #fff;
    color: #000;
  }
}
///Error messages:___________--

.success {
  position: absolute;
  left: 20%;
  top: 105%;
  color: green;
  font-size: 2rem;
  text-align: left;
}

@media screen and (max-width: 570px) {
  .floating_label,
  input,
  #form_btn,
  h2 {
    font-size: 3.5rem;
    padding: 1.5rem 10%;
  }
}
@media screen and (max-width: 340px) {
  .floating_label,
  input,
  #form_btn,
  h2 {
    font-size: 3rem;
  }
}
</style>
