using MeleeMessenger.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeleeMessenger.Hubs
{
    public class MeleeMessengerHub : Hub<IMeleeMessengerClient>
    { }
}
