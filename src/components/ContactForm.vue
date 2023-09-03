<template>
  <form
    class="w-full relative flex flex-col items-start justify-around border-t border-white"
    @submit.prevent="checkAndSend"
    novalidate="true"
  >
    <div class="w-full border-b border-white relative">
      <input
        v-model.trim="name"
        @focus="resetError('name')"
        class="w-full bg-inherit py-4 px-[20%] capitilize border-none border-transparent"
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

    <div class="w-full border-b border-white relative">
      <input
        v-model.trim="email"
        @focus="resetError('email')"
        class="w-full bg-inherit py-4 px-[20%] capitilize border-none border-transparent"
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

    <div class="w-full border-b border-white relative">
      <textarea
        v-model.trim="message"
        rows="3"
        @focus="resetError('message')"
        class="w-full bg-inherit py-4 capitilize border-none border-transparent overflow-hidden resize-none"
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

    <button
      type="submit"
      class="w-full bg-transparent capitalize border-b border-b-white flex justify-start items-start relative py-4 px-[20%] text-3xl"
    >
      Send
    </button>
    <div
      v-if="this.answer.success"
      class="absolute left-1/4 top-full text-green-500 text-3xl text-left"
    >
      {{ answer.text }}
    </div>
  </form>
</template>

<script>
import Email from '../utilities/email'

export default {
  name: 'ContactForm',
  data() {
    return {
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
    async checkAndSend() {
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
        Email.send({
          Host: 'smtp.elasticemail.com',
          Username: 'alicedevlab@gmail.com',
          Password: '4E4CB299494A0BC888DA1CA24CA458DC7319',
          To: 'kreepomatic@gmail.com',
          From: 'alicedevlab@gmail.com',
          Subject: 'Message from KreepMaster App',
          Body: this.name + ' from ' + this.email + ' sends message: ' + this.message
        })
          .then((resp) => {
            if (resp == 'OK') {
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
  padding: 1rem 20%;
  text-transform: capitalize;
  font-size: 2rem;
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
    font-size: 1rem;
    background-color: transparent;
  }
}

input:not(:placeholder-shown) ~ .floating_label {
  top: -1.5rem;
  font-size: 1.9rem;
  background-color: transparent;
}

button::before {
  position: absolute;
  content: '';
  display: block;
  width: 100%;
  border-top: 1px dashed #fff;
  top: -4rem;
  left: 0;
}
button:hover,
button:focus {
  cursor: pointer;
  background-color: #fff;
  color: #000;
}

@media screen and (max-width: 570px) {
  .floating_label,
  input,
  button,
  h2 {
    font-size: 3.5rem;
    padding: 1.5rem 10%;
  }
}
@media screen and (max-width: 340px) {
  .floating_label,
  input,
  button,
  h2 {
    font-size: 3rem;
  }
}
</style>
