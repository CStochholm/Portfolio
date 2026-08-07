function Contact() {

  return (

    <section id="contact" className="py-20">

      <h2 className="text-5xl text-center mb-10">
        Contact
      </h2>


      <div className="flex justify-center px-4">

        <form className="flex flex-col gap-4 w-full max-w-xl">


          <input
            className="border p-3 rounded"
            placeholder="Name"
            type="text"
          />


          <input
            className="border p-3 rounded"
            placeholder="Email"
            type="email"
          />


          <textarea
            className="border p-3 rounded h-40"
            placeholder="Message"
          />


          <button
            className="bg-black text-white p-3 rounded hover:opacity-80 transition"
          >
            Send Message
          </button>


        </form>

      </div>

    </section>

  );

}


export default Contact;