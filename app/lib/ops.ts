import $ from "jquery";

export function sendContactForm(formId: string) {
  return function(e: any) {
    e.preventDefault();
    const form = $(`#${formId}`)
    $.ajax({
      url: "https://formspree.io/f/mayrvqyd",
      type: "post",
      data: form.serialize(),
    });
    $("input,textarea", `#${formId}`).val('')
    setTimeout(() => alert("Mensaje Enviado!"), 1);
  }
}