<template>
  <div class="container">
    <div class="header">
      <h1 id="title" class="text-center">Booking Form</h1>
      <p id="description" class="description text-center">
        Thank you for booking tables at Container Coffee
      </p>
    </div>
    <form id="survey-form" @submit.prevent="postOder">
      <div class="form-group">
        <label id="name-label" for="name">Name</label>
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          class="form-control"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="form-group">
        <label id="email-label" for="email">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="Enter your Email"
          required
        />
      </div>

      <div class="form-group">
        <label id="name-label" for="amount">Amount of Table</label>
        <input
          v-model="amount"
          type="text"
          name="phone"
          id="phone"
          class="form-control"
          placeholder="Enter amount of table"
          required
        />
      </div>

      <div class="form-group">
        <label id="number-label" for="number">Phone</label>
        <input
          v-model="phone"
          type="text"
          class="form-control"
          placeholder="Phone"
        />
      </div>
      <div class="form-group">
        <p>Loacation</p>
        <select
          v-model="type"
          id="dropdown"
          name="role"
          class="form-control"
          required
        >
          <option disabled selected value>Select location that you want</option>
          <option >Floor G</option>
          <option >Floor 1</option>
          <option >Floor 2</option>
          <option >Rooftop</option>
          <option >Garden</option>
        </select>
      </div>

      <div class="form-group">
        <p>Any comments or suggestions?</p>
        <textarea
          v-model="comment"
          id="comments"
          class="input-textarea"
          name="comment"
          placeholder="Enter your comment here..."
        ></textarea>
      </div>

      <div class="form-group">
        <button id="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Form",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      amount: "",
      type: "",
      comment: "",
    };
  },
  methods: {
    postOder() {
      let order = {
        name: this.name,
        email: this.email,
        amount: this.amount,
        phone: this.phone,
        type: this.type,
        comment: this.comment,
      };
      console.log(order);
      axios.post('http://localhost:3000/order/postOrder', order)
      .then(Response => console.log(Response))
      .catch(err => console.log(err))
    },
  },
};
</script>