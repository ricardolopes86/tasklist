Template.lista.helpers({
  tarefas : function(){
    return Tarefas.find({});
  },

  formataData: function(){
    return moment(this.data).format('DD/MM/YYY HH:mm');
  }
});
Template.lista.events({
  'click button' : function() {
    var tarefa = this;

    //Tarefa.remove({_id: tarefa._id})
    Meteor.call("excluir", tarefa._id);
  }
});
