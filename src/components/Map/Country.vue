<template>
  <div class="country" :style="{ backgroundImage: `url(${countryproperty.bgsrc}` }">
    <div class="contain">
      <img :src="countryproperty.iconsrc" alt="" style="height: 6rem;">
      <div class="countryname">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAAAOCAYAAABaQBU/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0RjVENjE0MkJBMzExRUE5N0RBQTE1QTRBMDcyODJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0RjVENjE1MkJBMzExRUE5N0RBQTE1QTRBMDcyODJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNUQ2MTIyQkEzMTFFQTk3REFBMTVBNEEwNzI4MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNUQ2MTMyQkEzMTFFQTk3REFBMTVBNEEwNzI4MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kba4rAAACJUlEQVR42uybzStEURjGz3uNhYWPFNkoK6FsiIQ0Vij+Bf+eLTa+xUJCkiTsLFBYiOQ74znNOzl0Z+65DJnr+dUv7pz33HvnZp7Oh5FMJmMIISSBlMFOuBlVmOKzIoQkEIFDsBWWw7WCxRwREkJKlEp4D19CRoIjsAVmNBQP4Dx8ZhASQpIy5e2AXXAV7jttFXAMNoaMEC/gJLxhEBJCSpkmOABrnHCb0LYGOAqr9PgKzsB+7Wd5hCtw73MQSgnO/X+zv3yzRorUR754XvH4Pe6xeJ5XPF6TGP187qFQnU+fqNfcn0HIdfKdR2LUufcYRJwv8HgPUfdgYtSYPNePenaBM00Vj78J8fg8nMINeAZ7dIRYpu0ncBo+6HE37DPZfRHb9xjOwev/GITyQ32kiG3yzVrfICxGaIpnrcQITN9riceHSGKGpIkRBKZIASMRgR3EDDef2sDj+QSeQSVfaI969oX6GQ2+DQ27WjgM6512u0u8rsHrUg0HYbMe27XFHWsqpPivw7k8IcROjdOw3RkF3sJZDch8uAH/arKbJ09cIySElCI2/OxaoF0XbIN3cNlk1wBzlGvQiU6b3anxEVzS8ORmCSEkkXTraNFulvSa7GaJDUC7ZrgADz+svzAICSEJow6O5zLOvG/SnMMpE/LvMwGfGSEkYVzqNNk4YWhHgBNhIWgMv2JHCEkmOzrQS8NduFiomEFICEkq2xqGW1GFbwIMAD6gYaK7UVFBAAAAAElFTkSuQmCC" alt="">
        <h1 style="font-weight: 400;">{{ countryproperty.countryname }}</h1>
        <img style="transform: rotate(180deg);" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAAAOCAYAAABaQBU/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0RjVENjE0MkJBMzExRUE5N0RBQTE1QTRBMDcyODJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0RjVENjE1MkJBMzExRUE5N0RBQTE1QTRBMDcyODJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNUQ2MTIyQkEzMTFFQTk3REFBMTVBNEEwNzI4MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNUQ2MTMyQkEzMTFFQTk3REFBMTVBNEEwNzI4MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kba4rAAACJUlEQVR42uybzStEURjGz3uNhYWPFNkoK6FsiIQ0Vij+Bf+eLTa+xUJCkiTsLFBYiOQ74znNOzl0Z+65DJnr+dUv7pz33HvnZp7Oh5FMJmMIISSBlMFOuBlVmOKzIoQkEIFDsBWWw7WCxRwREkJKlEp4D19CRoIjsAVmNBQP4Dx8ZhASQpIy5e2AXXAV7jttFXAMNoaMEC/gJLxhEBJCSpkmOABrnHCb0LYGOAqr9PgKzsB+7Wd5hCtw73MQSgnO/X+zv3yzRorUR754XvH4Pe6xeJ5XPF6TGP187qFQnU+fqNfcn0HIdfKdR2LUufcYRJwv8HgPUfdgYtSYPNePenaBM00Vj78J8fg8nMINeAZ7dIRYpu0ncBo+6HE37DPZfRHb9xjOwev/GITyQ32kiG3yzVrfICxGaIpnrcQITN9riceHSGKGpIkRBKZIASMRgR3EDDef2sDj+QSeQSVfaI969oX6GQ2+DQ27WjgM6512u0u8rsHrUg0HYbMe27XFHWsqpPivw7k8IcROjdOw3RkF3sJZDch8uAH/arKbJ09cIySElCI2/OxaoF0XbIN3cNlk1wBzlGvQiU6b3anxEVzS8ORmCSEkkXTraNFulvSa7GaJDUC7ZrgADz+svzAICSEJow6O5zLOvG/SnMMpE/LvMwGfGSEkYVzqNNk4YWhHgBNhIWgMv2JHCEkmOzrQS8NduFiomEFICEkq2xqGW1GFbwIMAD6gYaK7UVFBAAAAAElFTkSuQmCC" alt="">
      </div>
      <div class="desc">
        <p v-html="countryproperty.desc"></p>
      </div>
      <div class="tips">
        <div class="animation1"></div>
      </div>
      <p style="font-weight: 100;font-size: 14px;margin-top: 1rem;">查看详情</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    countryproperty: {
      type: Object,
      required: true
    }
  },
  setup() {

    return {}
  }
}
</script>

<style lang="scss" scoped>
.country {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  .contain {
    color: white;
    display: flex;
    width: 48rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 9rem auto auto auto;
    .countryname{
      margin-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center ;
      img{
        height: 100%;
      }
    }
    .desc {
      margin-top:3rem ;
      width: 80%;
      p {
        line-height: 1.5rem;
        text-align: center;
        font-size: 14px;
        font-weight: 300;
      }
    }

    .tips {
      background: url(data:image/png;base64,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) center no-repeat;
      background-size: cover;
      height: 3rem;
      display: flex;
      width: 3rem;
      position: relative;
      margin: 4rem auto auto auto;

      .animation1 {
        width: 3rem;
        height: 3rem;
        position: absolute;

        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAADGElEQVR4nO3cSXbCQAwE0IofN+D+R+QMZEE6CcZDDxpKbdUmj2SBVH8B2B2+ns8nguf+8/PhOsVgbt4DDOaOPwggMMbiPcBA1gjrx6ESFWKv9LAYESHOyg6JEQ2ituRwGJEgWssNhREForfUMBgRIEbLDIHBDiFVIj0GM4R0edQYrBBapdFiMEJol0WJwQZhVRIdBhOEdTlUGCwQXqXQYDBAeJfh/fwA/CEoSgDBHJ4Q7suv4jqPFwQbQonbXB4QrAglLvNZQ7AjlJjPaQkRBaHEdF4riGgIJWZzW0BERSgxmV8bIjpCifoemhCzIJSo7qMFMRtCidpeGhCzIpSo7CcNMTtCifiekhBXQSgR3VcK4moIJWJ7S0BcFaFEZP9RiKsjlAz3MAKRCO8Z6qMXIhG2091LD0QiHKern1aIRKhLc08tEInQlqa+aiESoS/VvdVAJMJYqvo7g0gEmZz2eASRCLI57HMPIhF0stvrFkQi6Gaz3zVEItjko+fl6I8Z1bz1vWz9MmOW395vSATv3AH//4/I/GTB68umwn7h1AR5AHgs/x84DnPV/Pa+bP0yY5K3vtevEYlhk4+et16sE0M3m/3uvWtKDJ3s9nr09jUxZHPY59nniMSQyWmPNR/oEmMsVf3VfrJOjL5U99ZyiSMx2tLUV+u1psSoS3NPPRf9EuM4Xf30Xn1NjO109zJyGTwx3jPUx+j9iMR4ZbgHiRtDV8cQ2V/qDt1VMcT2lrxVejUM0X2l71lfBUN8T43DA7NjqOyndYpjVgy1vTSP08yGobqP9rmmWTDU97A4YBYdw2R+q5N+UTHM5rY8chkNw3Re67OvUTDM5/Q4hMyO4TKf12lwVgy3uTyP5bNhuM7j/f8RLBjuc3hDAP4leD8/AA4IwK8MCgSABwKwL4UGAeCCAOzKoUIA+CAA/ZLoEABOCECvLEoEgBcCkC+NFgHghgDkyqNGAPghgPES6RGAGBBAf5khEIA4EEB7qWEQgFgQQH25oRCAeBDAecnhEICYEMB+2SERgLgQwGfpYRGA1xdnRc4aImy+AR6Dw6HJ07l+AAAAAElFTkSuQmCC) no-repeat center;
        background-size: cover;
        animation: animation1 1s ease-out infinite;
      }
    }
  }
}

@keyframes animation1 {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  25% {
    opacity: 0.5;
    transform: scale(1.25);
  }

  50% {
    opacity: 1;
    transform: scale(1.5);
  }

  75% {
    opacity: 0.5;
    transform: scale(1.75);
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }


}</style>