<template>
  <div class="dragDemo">
    <!--列表1-->
    <draggable class="list-group"
               element="div"
               v-model="listLeft"
               :options="dragOptions1"
               :move="onMove"
               @start="isDragging = true"
               @end="isDragging = false">
      <div v-for="(item, key) in listLeft"
           :key="key">
        <img src="http://oss.shangmian.xin/ciBm3U1544694909000?imageslim" />
        {{ item.name }}-{{ item.value }}
      </div>
    </draggable>
    <!--列表2-->
    <draggable class="list-group"
               element="div"
               v-model="listRight"
               :options="dragOptions2"
               :move="onMove"
               @start="isDragging = true"
               @end="isDragging = false">
      <div v-for="(item, key) in listRight"
           :key="key">
        <img src="http://oss.shangmian.xin/ciBm3U1544694909000?imageslim" />
        {{ item.name }}-{{ item.value }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'dragDemo',
  components: {
    draggable,
  },
  data () {
    return {
      isDragging: false,
      listLeft: [
        {
          name: '数据一',
          value: '1',
        },
        {
          name: '数据二',
          value: '2',
        },
        {
          name: '数据三',
          value: '3',
        },
        {
          name: '数据四',
          value: '4',
        },
        {
          name: '数据五',
          value: '5',
        },
      ],
      listRight: [],
    };
  },
  computed: {
    dragOptions1 () {
      return {
        animation: 0,
        group: {
          name: 'description',
          pull: 'clone',
          put: false,
        },
      };
    },
    dragOptions2 () {
      return {
        animation: 0,
        group: 'description',
        ghostClass: 'ghost',
      };
    },
  },
  methods: {
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
  },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.ghost {
  border: 1px dashed red;
}
.dragDemo {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  color: #555;
  .list-group {
    width: 300px;
    border: 1px solid #ddd;
    text-align: center;
    margin-right: 50px;
    > div {
      padding: 10px;
      border-bottom: 1px dashed #ddd;
      img {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-right: 10px;
      }
    }
  }
}
</style>
