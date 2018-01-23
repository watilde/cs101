#include<stdio.h>
#include<string.h>
#include<sys/socket.h>
#include<arpa/inet.h>

int main() {
  int s;
  if ((s = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) == -1) return -1;

  struct sockaddr_in addr;
  memset(&addr, 0, sizeof(addr));
  addr.sin_family = AF_INET;
  addr.sin_addr.s_addr = inet_addr("8.8.8.8");
  addr.sin_port = htons(53);

  if (connect(s, (struct sockaddr *)&addr, sizeof(addr)) == -1) return -1;

  free(s);
  return 0;
}
